package com.phonesimulator.doa;
import java.io.Serializable;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.id.IdentifierGenerator;

public class MyOwnGenerator implements IdentifierGenerator
{


	@Override
	public Serializable generate(SessionImplementor arg0, Object arg1) throws HibernateException 
	{
		int id=1;

		try
		{
			Class.forName("com.mysql.jdbc.Driver");

			Connection	con=DriverManager.getConnection("jdbc:mysql://localhost:3306/contactdatabase","root","root");

			Statement stm=con.createStatement();

			ResultSet rs=stm.executeQuery("select max(id) from contact");
			if (rs.next()) 
			{
				id=rs.getInt(1);
				id ++;
			}


		} 
		catch (ClassNotFoundException | SQLException e) 
		{
			e.printStackTrace();
		}
		return id;
	}


}
