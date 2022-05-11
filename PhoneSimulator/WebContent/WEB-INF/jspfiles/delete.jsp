<%@page import="com.phonesimulator.doa.Contact"%>
<%@page import="java.util.List"%>
<%@page import="com.jspi.phonesimulator.dto.Dboperations"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<%!
         private static List<Contact> Contact=null;
         private static Dboperations db=null;
    
         public void init() throws ServletException
         {
        	  db=new Dboperations();
         }
    %>
	<%
            String number=request.getParameter("num");
            boolean val=db.delete(number);
            if(val)
            {
            	System.out.println("deleted");
            }
            else
            {
            	System.out.println("Not deleted");
            }
    %>
	<%
		String site = new String("http://localhost:8080/PhoneSimulator/display");
		response.setStatus(response.SC_MOVED_TEMPORARILY);
		response.setHeader("Location", site);
	%>
</body>
</html>