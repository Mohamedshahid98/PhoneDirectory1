<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Register</title>
<style>
input, label {
	display: block;
	width: 50vh;
	margin-top: 10px;
	height: 4vh;
}
input
{
   font-size: large;
	font: bold;
}

.main-div {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: aquamarine;
	width: 70vh;
	height: 65vh;
	border-radius: 10px;
}
.button
{
   color:white;
   background-color:gray;
   height:5vh;
   border:0px;
   border-radius:10px;
   cursor: pointer;
}
</style>
</head>
<body>

	<jsp:include page="/header"></jsp:include>
	<div
		style="display: flex; justify-content: center; align-items: center; margin-top: 40px;">

		<div class="main-div">

			<form action="insert" method="POST">

				    <label for="na">Enter the Name</label>
				    <input  id="na" type="text"name="fname" required="required"> 
				    
					<label for="num" >Enter the Phone number</label> 
					<input id="num" type="tel" name="num" required="required"> 
					
					<label for="em">Enter the email_Id</label> 
					<input id="em" type="email" name="ema" required="required">
					
					<label for="br">Enter the Date_Of_Birth</label> 
					<input id="br" type="date" name="db" required="required">
					<input class="button" type="submit" value="Submit">
			</form>

		</div>

	</div>
	<jsp:include page="/footer"></jsp:include>

</body>
</html>