<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Header</title>
<style>
body {
	margin: 0px;
}

.navi {
	display: flex;
	justify-content: center;
	background-color: brown;
}

.navi ul {
	display: flex;
	justify-content: space-between;
	width: 80%;
}

.navi li {
	list-style: none;
	font-family:monospace;
	font-style: italic;
}

.navi li a {
	text-decoration: none;
	font-size: 20px;
	color: white;
	
}
</style>
</head>
<body>
	<nav class="navi">
		<ul>
			<li><a href="register">Insert</a></li>
			<li><a href="display">DiplayALLContact</a></li>
			<li><a href="searchContact">SearchContact</a></li>
			<li><a href="aboutjsp">About</a></li>
		</ul>
	</nav>

</body>
</html>