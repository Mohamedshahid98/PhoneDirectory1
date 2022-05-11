package com.jspi.phonesimulator.dto;


import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.phonesimulator.doa.Contact;

import edu.jsp.myownconfiguration.MyOwnSingleTon;

/**
 * @author mohamed shahid
 *
 */

public class Dboperations 
{

	/**
	 * To insert a details into Database
	 * @param c
	 * @return Object
	 */

	public Object insertcontact(Contact c)
	{
		Object res=null;
		SessionFactory factory=MyOwnSingleTon.getSessionObj();

		Session session=factory.openSession();
		Transaction tx=session.beginTransaction();
		try
		{
			session.save(c);
			tx.commit();
			return "inserted";
		}  
		catch (Exception e) 
		{
			tx.rollback();
			res=e.getCause();
			return res;
		}

	} 



	/**
	 * method Display All The Contact
	 * @return List Of Contact
	 * 
	 */

	
	public List<Contact> getAllConatact()
	{

		SessionFactory factory=MyOwnSingleTon.getSessionObj();
		Session session=factory.openSession();

		Query query=session.createQuery("FROM Contact AS c");
		List<Contact> allcontact=query.list();

		return allcontact;
	}



	/**
	 * @param name
	 * @return
	 */

	public List<Contact> searchContact(String name,String number)
	{
		SessionFactory factory=MyOwnSingleTon.getSessionObj();
		Session session=factory.openSession();

		Query query=session.createQuery("FROM Contact c WHERE  c.name in(:cname) OR c.number=:num");
		query.setParameter("cname",name);
		query.setParameter("num",number);
		List results = query.list();

		if (results.isEmpty()) 
			return null;
		else
			return  results;
	}



	public boolean delete(String number)
	{
		SessionFactory factory=MyOwnSingleTon.getSessionObj();
		Session session=factory.openSession();

		Query query = session.createQuery("DELETE FROM Contact c where c.number=:cnum");
		Transaction tx=session.beginTransaction();
		query.setParameter("cnum",number);
		int result = query.executeUpdate();
		try
		{
			tx.commit();
			return true;
		}
		catch (Exception e) 
		{
			tx.rollback();
			System.out.println(e.getCause());
			return false;
		}
	} 



	public boolean update(String name,String number)
	{
		SessionFactory factory=MyOwnSingleTon.getSessionObj();
		Session session=factory.openSession();
		Transaction tx=session.beginTransaction();

		Query query = session.createQuery("update Contact set name=:fname where number=:newNumber");
		query.setParameter("fname",name);
		query.setParameter("newNumber",number);
		int result = query.executeUpdate();
		try
		{
			tx.commit();
			return true;
		}
		catch (Exception e) 
		{
			tx.rollback();
			System.out.println(e.getCause());
			return false;
		}
	}

	public static void main(String[] args)
	{
		Contact c=new Contact();
		c.setId(6);
		c.setName("idii");
		c.setEmailid("mogd");
		c.setNumber("86899999");
		c.setDateOfBirth("2010-02-10");

		Object obj=new Dboperations().insertcontact(c);
		if (obj.equals("inserted")) 
			System.out.println("Inserted");
		else
			System.out.println(((Throwable)obj).getMessage());


		//	 boolean	l=new Dboperations().update("shahid",123456789);
		//
		//	 if (l)
		//	 {
		//		 System.out.println("update");
		//
		//	}
		//	 else
		//			System.out.println("No record Fo8und");
		//	}

		//	  List <Contact>	l= new Dboperations().searchContact("shahid","null");
		//		
		//		if (l!=null)
		//		{
		//			System.out.println(l);
		//		}
		//		else
		//			System.out.println("Not Found");
	}
}
