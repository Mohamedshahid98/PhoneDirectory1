<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Update</title>
<style>
.inputi {
	width: 40vh;
	height: 3vh;
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

	<%
		String number = request.getParameter("num");
	%>

	<div
		style="display: flex; justify-content: center; align-items: center; margin-top:15%">
		<div class="main-div">
			<form action="update" Method="GET">
				<input type="text" name="num" value="<%=number%>"> 
				<label for="se">Enter the Name to be Update</label>
				 <input class="inputi" type="tel" id="se" name="fname" required="required"> 
				 <input type="submit" value="Update">
			</form>
		</div>
	</div>



</body>
</html>