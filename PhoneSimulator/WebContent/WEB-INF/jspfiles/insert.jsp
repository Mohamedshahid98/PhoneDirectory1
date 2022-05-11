
<%@page import="com.phonesimulator.doa.Contact"%>
<%@page import="com.jspi.phonesimulator.dto.Dboperations"%>
<%@page import="java.lang.*"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<style>
h1 {
	animation: hideMe 3s forwards;
}

 @keyframes hideMe{
        0%{
            opacity: 1;
        }
        99.99%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
</style>
</head>
<body>
	<%!static private Dboperations db = null;
	static private Contact c = null;

	public void init() throws ServletException {
		db = new Dboperations();
		c = new Contact();
	}%>

	<%
		String name = request.getParameter("fname");
		String number = request.getParameter("num");
		String email = request.getParameter("ema");
		String date = request.getParameter("db");
	%>
	<%
		c.setName(name);
		c.setNumber(number);
		c.setEmailid(email);
		c.setDateOfBirth(date);

		Object res = db.insertcontact(c);

		if (res.equals("inserted")) {
	%>
	<jsp:include page="/register"></jsp:include>
	<h1
		style="margin-top: 5px; text-align: center; background-color: green;">Inserted</h1>

	<%
		} else {
	%>
	<jsp:include page="/register"></jsp:include>
	<h1 style="margin-top: 5px; text-align: center; background-color: red"><%=((Throwable)res).getMessage()%></h1>

	<%
		}
	%>

</body>
</html>