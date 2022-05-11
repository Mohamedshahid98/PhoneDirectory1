<%@page import="com.phonesimulator.doa.Contact"%>
<%@page import="com.jspi.phonesimulator.dto.Dboperations"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>DisplayAllContact</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<style>
        button
        {
            border-radius: 100px;
            border: 0px;
            background-color: white;
            cursor:pointer;
        }
</style>
</head>
<body>

	<%!
         private static List<Contact> allContact=null;
         private static Dboperations db=null;
    
         public void init() throws ServletException
         {
        	  db=new Dboperations();
         }  
    %>
    
	<jsp:include page="/header"></jsp:include>
	<table border="1" align="center" style="width: 105vh; margin-top: 8%">
		<tr>
			<th>Name</th>
			<th>Number</th>
			<th>Email_Id</th>
			<th>Date_Of_Birth</th>
			<th>Update</th>
			<th>Delete</th>
		</tr>

		<%
           allContact=db.getAllConatact();
		  // allContact=new ArrayList<Contact>();
		   if(allContact.isEmpty())
		   {
		   %>
		     <tr style="text-align: center;">
			 <td colspan="6">******No Records*******</td>
		     </tr>
		    <% 
		   }
		   else
		   {
		       for(int i=0;i<allContact.size();i++)
		       {
		    	  Contact c=allContact.get(i);
		  %>

		<tr style="text-align: center;">
			<td><%=c.getName() %></td>
			<td><%=c.getNumber() %></td>
			<td><%=c.getEmailid() %></td>
			<td><%=c.getDateOfBirth() %></td>
			<td><a href="updatepage?num=<%=c.getNumber()%>" ><button><i class="fa fa-edit" aria-hidden="true"></i></button></a></td>
			<td><a href="delete?num=<%=c.getNumber()%>" ><button><i class="fa fa-trash" aria-hidden="true"></i></button></a></td>
		</tr>
		<% 
	       }
		   }
	    %>

	</table>
	<jsp:include page="/footer"></jsp:include>

</body>
</html>