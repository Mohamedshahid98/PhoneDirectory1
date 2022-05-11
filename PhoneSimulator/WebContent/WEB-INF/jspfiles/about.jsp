<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>About</title>
<style>
body {
	margin: 0px;
}

.main-div {
	background-color: gray;
	margin: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30vh;
	font-family: Arial, Helvetica, sans-serif;
	color: white;
}

.container {
	width: 50vh;
	height: 70vh;
	background-color: white;
	margin-bottom: 10px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

img {
	width: 50vh;
	height: 30vh;
}

a {
	text-decoration: none;
	
}

button {
	display: block;
	margin: auto;
	width: 100%;
	border-radius: 0PX;
	border: 0px;
	height: 5vh;
	background-color: black;
	color: white;
	font-size:17px;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
		sans-serif;
	font-weight: bolder;
	color: white;
	cursor: pointer;
}

.fot {
	width: 100%;
	background-color: gray;
	height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: large;
	font: bold;
}
</style>
</head>
<body>
	<jsp:include page="/header"></jsp:include>
	<Div class="main-div">
		<div style="text-align: center;">
			<h1>ABOUT ME</h1>
			<p>I am passionate about my work.</p>
			<p>I am ambitious and driven.</p>
		</div>
	</Div>
	<h1 style="text-align: center;">Developed By</h1>
	<div
		style="display: flex; justify-content: center; align-items: center;">

		<div class="container">
			<div>
				<img src="image/inCollage_20210813_203035057.jpg" alt="">
			</div>
			<div style="padding: 10px;">
				<h2>Mohammed Shahid</h2>
				<p>Designer & Developer</p>
				<p>mohamed@Gmail.com.</p>
			</div>
			<div style="padding: 10px;">
				<a href="tel:895-111-6542"><button>Contact</button></a>

			</div>
		</div>
	</div>
	<footer class="fot">
		<small> All Copy right are reserved &copy 2022</small>
	</footer>
</body>
</html>