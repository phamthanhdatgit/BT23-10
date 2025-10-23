$(document).ready(function () {
  // Hàm kiểm tra định dạng email
  function isValidEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  // Xử lý khi nhấn nút Add Row
  $(".add-row").click(function () {
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var birthdate = $("#datepicker").val().trim();

    // Kiểm tra nhập đủ thông tin
    if (name === "" || email === "" || birthdate === "") {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Kiểm tra email hợp lệ
    if (!isValidEmail(email)) {
      alert("Email không hợp lệ!");
      return;
    }

    // Thêm dòng mới vào bảng
    var newRow = `
      <tr>
        <td><input type="checkbox" class="select-row"></td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${birthdate}</td>
      </tr>
    `;
    $("table tbody").append(newRow);

    // Xóa nội dung trong các ô nhập
    $("#name, #email, #datepicker").val("");
  });

  // Xử lý khi nhấn nút Delete Row
  $(".delete-row").click(function () {
    $("table tbody").find("input.select-row:checked").each(function () {
      $(this).closest("tr").remove();
    });
  });
});
