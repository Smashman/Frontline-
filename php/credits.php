<?php
$data = [];
function return_id($user) {
	return $user['id'];
}
function get_credit_data($users_list) {
	$user_id_list = array_map("return_id", $users_list);
	include 'config.php';
	$conn = new mysqli($db_host, $db_username, $db_password, $db_name);
	mysqli_set_charset($conn, 'utf8mb4');
	$query = "SELECT * from users where account_id in (";
	$length = count($user_id_list);
	for ($i=0; $i < $length; ++$i) {
		if ($i+1 < $length) {
			$query .= $user_id_list[$i].", ";
		} else {
			$query .= $user_id_list[$i];
		}
	}
	$query .= ")";
	$result = $conn->query($query);
	global $data;
	if ($result->num_rows > 0) {
		while ($row = $result->fetch_assoc()) {
			$data[$row['account_id']] = ["avatar"=>$row['avatar_medium'],"name"=>htmlspecialchars($row['name']),"url"=>$row['profile_url']];
		}
	}
}
function steam_block ($user) {
	global $data;
	$user_id = $user['id'];
	$role = $user['role'];
	$long = (strlen($role) > 30 ? true : false);
	if ($data[$user_id]) {
		$block = '<a class="steam" href="'.$data[$user_id]['url'].'" target="_blank">
							<div class="iconholder">
								<img src="'.$data[$user_id]['avatar'].'" />
							</div>
							<div class="name'. ($role == false ? ' no_role': '') .'">'.$data[$user_id]['name'].'</div>';
		if ($role) {
			$block .= '<div class="role'.($long ? ' long': '').'">'.$role.'</div>';
		}
		$block .= '</a>';
		return $block;
	}
}
function output_credits ($users_list) {
	$output = "";
	get_credit_data($users_list);
	shuffle($users_list);
	$chunked = array_chunk($users_list, 3);
	foreach($chunked as $row) {
		$output .= "<div class=\"row\">";
		foreach($row as $user) {
			$output .= steam_block($user);
		}
		$output .= "</div>";
	}
	return $output;
}