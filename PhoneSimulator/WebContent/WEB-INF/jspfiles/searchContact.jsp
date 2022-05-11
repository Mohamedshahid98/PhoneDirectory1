<%@page import="java.util.List"%>
<%@page import="com.phonesimulator.doa.Contact"%>
<%@page import="com.jspi.phonesimulator.dto.Dboperations"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Search Contact</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
.inputi {
	width: 40vh;
	height: 3vh;
	font-size: large;
	font: bold;
}

.button1
        {
            border-radius: 100px;
            border: 0px;
            background-color: white;
            cursor:pointer;
        }

.button {
	color: white;
	background-color: gray;
	height: 5vh;
	border: 0px;
	border-radius: 20px;
	width: 20vh;
	cursor: pointer;
}

.main-div {
	width: 150vh;
	height: 20vh;
	background-color: hsl(271, 78%, 70%);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: large;
	font-family: 'Courier New', Courier, monospace;
	font-weight: bold;
	border: rgb(157, 102, 185) groove 5px;
}
</style>
</head>
<body>

	<jsp:include page="/header"></jsp:include>
	<div
		style="display: flex; justify-content: center; align-items: center; margin-top: 10%">
		<div class="main-div">
			<form action="searchContact" method="GET">
				<label for="se">Enter the Name OR Number to Search Contact</label> <input
					class="inputi" type="text" id="se" name="fname" required="required">
				<input class="button" type="submit" value="Search">
			</form>
		</div>
	</div>
	<%!static private Dboperations db = null;
	static private Contact c = null;
	static private List<Contact> contactList;

	public void init() throws ServletException {
		db = new Dboperations();
	}%>

	<%
		String name = request.getParameter("fname");
	%>
	<table border="1" id="id1" align="center"
		style="width: 100vh; margin-top: 1%;">
		<tr>
			<th>Name</th>
			<th>Number</th>
			<th>Email_Id</th>
			<th>Date_Of_Birth</th>
			<th>Update</th>
			<th>Delete</th>
		</tr>

		<%
			contactList = db.searchContact(name, name);
			if (contactList != null) {
				for (int i = 0; i < contactList.size(); i++) {
					Contact c = contactList.get(i);
		%>

		<tr style="text-align: center;">
			<td><%=c.getName()%></td>
			<td><%=c.getNumber()%></td>
			<td><%=c.getEmailid()%></td>
			<td><%=c.getDateOfBirth()%></td>
			<td><a href="updatepage?fname=<%=c.getName()%>"><button class="button1">
						<i class="fa fa-edit" aria-hidden="true"></i>
					</button></a></td>
			<td><a  href="delete?fname=<%=c.getName()%>"><button class="button1">
						<i class="fa fa-trash" aria-hidden="true"></i>
					</button></a></td>
		</tr>
		<%
			}

			} else {
		%>
		<tr style="text-align: center;">
			<td colspan="4">******No Records Found for Name or Number <%=name%>
				*******
			</td>
		</tr>
		<%
			}
		%>

	</table>
	<jsp:include page="/footer"></jsp:include>

</body>
</html>