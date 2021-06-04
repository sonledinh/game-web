<?php include 'header.php';?>
<main style="background: url('images/bn-about.jpg') no-repeat center;background-size: cover;">
	<section class="form-user">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-6">
					<div class="avar-user text-center"><img src="images/avar-user.png" class="img-fluid" alt=""></div>
				</div>
				<div class="col-md-6">
					<div class="box-form-user">
						<div class="title-user text-center">
							<img src="images/tab-about.png" class="img-fluid" alt=""><span>ĐĂNG NHẬP</span>
						</div>
						<div class="list-form-user">
							<div class="item">
								<label>Tài khoản</label>
								<input type="text" placeholder="Nhập email hoặc SĐT">
							</div>
							<div class="item">
								<label>Mật khẩu</label>
								<input type="text" placeholder="Nhập mật khẩu">
							</div>
							<div class="item">
								<input type="submit" class="btn-login" value="Đăng nhập">
							</div>
							<div class="item text-center">
								<p>hoặc</p>
								<div class="l-fb">
									<a href=""><img src="images/login-fb.png" class="img-fluid" alt=""></a>
								</div>
								<div class="note-user">
									<span>Chưa có tài khoản? <a href="register.php">Đăng ký ngay</a></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
<?php include 'footer.php';?>     
