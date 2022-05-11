package com.phonesimulator.doa;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="contact")
public class Contact implements Serializable
{
	@Id
	@GenericGenerator(name="mygen",strategy = "com.phonesimulator.doa.MyOwnGenerator")
	@GeneratedValue(generator = "mygen")
	@Column(name="id")
	private int id;

	@Column(name="name")
	private String name ;

	
	@Column(name="number")
	private String number;

	@Column(name="emailid")
	private String emailid;

	@Column(name="dateOfBirth")
	private String dateOfBirth;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	@Override
	public String toString() {
		return "Contact [id=" + id + ", name=" + name + ", number=" + number + ", emailid=" + emailid + ", dateOfBirth="
				+ dateOfBirth + "]";
	}
	
}
