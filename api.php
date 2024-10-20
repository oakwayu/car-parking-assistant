<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // รับคำสั่งจาก query parameters
    $command = $_GET['command'] ?? '';

    // ทำการประมวลผลคำสั่ง
    if ($command === 'turn_on') {
        // การทำงานเมื่อสั่งเปิด
        $response = "Device turned on.";
    } elseif ($command === 'turn_off') {
        // การทำงานเมื่อสั่งปิด
        $response = "Device turned off.";
    } else {
        $response = "Unknown command.";
    }

    // ส่งกลับคำตอบ
    echo $response;
}
?>
