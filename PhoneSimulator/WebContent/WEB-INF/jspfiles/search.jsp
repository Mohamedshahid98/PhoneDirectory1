<%@page import="java.util.List"%>
<%@page import="com.jspi.phonesimulator.dto.Dboperations"%>
<%@page import="com.phonesimulator.doa.Contact"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<jsp:include page="/header"></jsp:include>
	<%!static private Dboperations db = null;
	static private Contact c = null;

	public void init() throws ServletException {
		db = new Dboperations();
		c = new Contact();
	}%>

	<%
		String name = request.getParameter("fname");
	%>
	<table border="1" align="center" style="width: 100vh; margin-top: 8%">
		<tr>
			<th>Name</th>
			<th>Number</th>
			<th>Email_Id</th>
			<th>Date_Of_Birth</th>
		</tr>

		<%
			List<Contact> c = db.searchContact(name,name);
			if (c != null) {
		%>
		<tr style="text-align: center;">

		</tr>
		<%
			} else {
		%>

		<tr style="text-align: center;">
			<td colspan="4">******No Records*******</td>

		</tr>

		<%
			}
		%>

	</table>
	<jsp:include page="/footer"></jsp:include>

</body>
</html>