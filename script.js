const express = require('express');
const app = express();
const port = 3000;

app.get('/update', (req, res) => {
  const distance = req.query.distance;
  console.log(`Distance: ${distance}`);
  // อัปเดตข้อมูลในเว็บไซต์ที่มีการแสดงผล
  res.send('Data received');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
function updateDistance() {
    fetch('/latest-distance')
      .then(response => response.json())
      .then(data => {
        simulateSensor(data.distance);
      });
  }
  
function simulateSensor(distance) {
    // ลบคลาส 'active' ออกจากไฟทั้งหมดก่อน
    document.getElementById('greenLight').classList.remove('active');
    document.getElementById('yellowLight').classList.remove('active');
    document.getElementById('redLight').classList.remove('active');

    // กำหนดสัญญาณตามระยะที่เลือก
    if (distance < 10) {
        // ระยะอันตราย
        document.getElementById('redLight').classList.add('active');
        playSound('danger.mp3'); // เสียงอันตราย
    } else if (distance < 30) {
        // ระยะเตือน
        document.getElementById('yellowLight').classList.add('active');
        playSound('warning.mp3'); // เสียงเตือน
    } else {
        // ระยะปลอดภัย
        document.getElementById('greenLight').classList.add('active');
        playSound('safe.mp3'); // เสียงปลอดภัย
    }
}

function simulateWarningDistance() {
    // แสดงไฟเหลืองและเล่นเสียงเตือน
    document.getElementById('greenLight').classList.remove('active');
    document.getElementById('yellowLight').classList.add('active');
    document.getElementById('redLight').classList.remove('active');
    playSound('warning.mp3'); // เสียงเตือน
}

function simulateDangerDistance() {
    // แสดงไฟแดงและเล่นเสียงอันตราย
    document.getElementById('greenLight').classList.remove('active');
    document.getElementById('yellowLight').classList.remove('active');
    document.getElementById('redLight').classList.add('active');
    playSound('danger.mp3'); // เสียงอันตราย
}

// ฟังก์ชันสำหรับการเล่นเสียง
function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play().catch(function(error) {
        console.error("Error playing sound:", error);
    });
}
