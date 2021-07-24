<?php top(); ?>


<!-- begin solution -->

<h1 style="color:Yellow;">!!!!!!---MATCHING BOOKS---!!!!!</h1>

<?php
$type = $_GET["type"];
$maxprice = (int) $_GET["maxprice"];
$primeclub = isset($_GET["primeclub"]);
$filename = strtolower($type) . ".txt";

if (file_exists($filename)) {
	$lines = file($filename);
	?>
	
	<ul>
		<?php
		$count = 0;
		foreach ($lines as $line) {
			list($title, $price) = explode(":", $line);
			if ($primeclub) {
				$price *= 0.8;
			}
			if (!$maxprice || $price <= $maxprice) {
				$count++;
				?>
				<h2 style="color:green"><li>$<?= $price ?> - <?= $title ?></h2>
				<?php
			}
		}
		?>
	</ul>
	
	<h3 style="color:blue;"><?= $count ?> match(es).</h3>
	<?php
} else {
	?>
	<p style="color:red;"><b>CATEGORY NOT FOUND</b></p>
	<?php
}
?>


<!-- end solution -->

<?php bottom(); ?>


<?php
# provided code
function top() {
	?>
	
<html>
	<head>
		<title>RESULTS</title>
	</head>
	<body bgcolor="F08080">
	
	<?php
}

function bottom() {
	?>
	
	</body>
</html>
	
	<?php
}
?>
