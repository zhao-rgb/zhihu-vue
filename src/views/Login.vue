<template>
	<div class="login-bar tx-center">
		<router-link to="/"><img src="../assets/image/2.png" class="logo" /></router-link>

		<div class="login-box m-auto fill-white tiny-round">
			<div class="tab">
				<span class="tab-item link mr-4 ml-4" :class="{ active: isActive }" @click="changeTab">免密码登录</span>
				<span class="tab-item link" :class="{ active: !isActive }" @click="changeTab">密码登录</span>
			</div>

			<div class="tab-box" v-if="show && selected === 0">
				<div class="d-flex sign-account">
					<button class="Select-button col-3">
						<span class="china">中国 +86</span>
						<svg class="Zi--Select" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
							<path
								d="M12 16.183l2.716-2.966a.757.757 0 0 1 1.064.001.738.738 0 0 1 0 1.052l-3.247 3.512a.758.758 0 0 1-1.064 0L8.22 14.27a.738.738 0 0 1 0-1.052.758.758 0 0 1 1.063 0L12 16.183zm0-9.365L9.284 9.782a.758.758 0 0 1-1.064 0 .738.738 0 0 1 0-1.052l3.248-3.512a.758.758 0 0 1 1.065 0L15.78 8.73a.738.738 0 0 1 0 1.052.757.757 0 0 1-1.063.001L12 6.818z"
								fill-rule="evenodd"
							></path>
						</svg>
					</button>
					<span class="SignFlow-accountSeperator">&nbsp;</span>
					<input type="text" placeholder="手机号" class="col-6" />
				</div>
				<div class="sign-password">
					<input type="text" placeholder="输入6位短信验证码" class="account" />
					<button type="button" class="SignFlow fill-white link">获取短信验证码</button>
					<button type="button" class="SignFlow-ying fill-white link">接收语音验证码</button>
				</div>
				<button class="submitButton link">注册/登录</button>
				<div class="SignContainer-tip">
					<div>
						<div class="qian">未注册手机验证后自动登录</div>
						<div>
							注册即代表同意
							<a href="https://www.zhihu.com/terms">《知乎协议》</a>
							<a href="https://www.zhihu.com/term/privacy">《隐私保护指引》</a>
						</div>
					</div>
					<a href="https://www.zhihu.com/org/signup">注册机构号</a>
				</div>
			</div>
			<div class="tab-box" v-if="show && selected === 1">
				<div class="sign-number"><input type="text" class="Input" placeholder="手机号或邮箱" v-model="mobile" /></div>
				<div class="Input-password"><input type="password" class="Input" placeholder="密码" v-model="password" /></div>
				<div class="wji">
					<button type="button" class="haiwi">海外手机号登录</button>
					<button type="button" class="wj">忘记密码？</button>
				</div>
				<button class="submitButton1 link" @click="signIn(mobile, password)">注册/登录</button>
				<div class="SignContainer-tip">
					<div>
						<div class="qian">未注册手机验证后自动登录</div>
						<div>
							注册即代表同意
							<a href="https://www.zhihu.com/terms">《知乎协议》</a>
							<a href="https://www.zhihu.com/term/privacy">《隐私保护指引》</a>
						</div>
					</div>
					<a href="https://www.zhihu.com/org/signup">注册机构号</a>
				</div>
			</div>
		</div>

		<div class="login-social">
			<span>社交帐号登录</span>
			<span class="login-btngroup">
				<div class="login-btn">
					<svg
						viewBox="0 0 20 19"
						class="Icon Login-socialIcon Icon--wechat"
						width="18"
						height="18"
						aria-hidden="true"
						style="fill: rgb(96, 200, 77); height: 18px; width: 18px;"
					>
						<title></title>
						<g>
							<path
								fill-rule="evenodd"
								d="M.224 18.667s4.24-1.825 4.788-2.056C13.03 20.14 20 14.715 20 8.9 20 3.984 15.523 0 10 0S0 3.984 0 8.898c0 1.86.64 3.585 1.737 5.013-.274.834-1.513 4.757-1.513 4.757zM6.167 8.96c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272z"
							></path>
						</g>
					</svg>
					微信
				</div>
				<div class="login-btn">
					<svg
						width="18"
						height="18"
						viewBox="0 0 18 20"
						xmlns="http://www.w3.org/2000/svg"
						class="Icon Login-socialIcon Icon--qq"
						aria-hidden="true"
						style="fill: rgb(80, 200, 253); height: 18px; width: 18px;"
					>
						<title></title>
						<g>
							<title>QQ</title>
							<path
								d="M9.003 0c-2.265 0-6.29 1.364-6.29 7.325V8.52S.55 12.96.55 15.474c0 .665.17 1.025.28 1.025.115 0 .903-.485 1.75-2.073 0 0-.18 2.197 1.903 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.24.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.11 0 .283-.36.283-1.026 0-2.514-2.166-6.954-2.166-6.954V7.325C15.29 1.365 11.268 0 9.003 0z"
								fill-rule="evenodd"
							></path>
						</g>
					</svg>
					QQ
				</div>
				<div class="login-btn">
					<svg
						viewBox="0 0 22 18"
						class="Icon Login-socialIcon Icon--weibo"
						width="18"
						height="18"
						aria-hidden="true"
						style="fill: rgb(251, 102, 34); height: 18px; width: 18px;"
					>
						<title></title>
						<g>
							<g fill-rule="evenodd">
								<path
									d="M14.518.06s-.87.644.03 1.71c0 0 6.287-1.19 5.69 6.33 0 0 1.05 1.13 1.674-.31 0 .002 1.44-8.584-7.394-7.73zM4.883 13.17s.038 2.584 3.326 2.584c3.657 0 3.683-2.98 3.683-2.98S12.1 9.67 8.687 9.61c-3.863-.07-3.804 3.56-3.804 3.56zM7.41 14.21c-.668 0-1.214-.447-1.214-.998 0-.55.543-.998 1.215-.998.67 0 1.213.447 1.213.998 0 .55-.54.998-1.212.998z"
								></path>
								<path
									d="M4.317 4.52C-2.603 10.353.873 14.85.873 14.85c.57 1.01 3.382 3.1 8.596 3.1 5.21 0 9.314-3.628 9.314-6.44 0-2.813-2.918-2.714-2.918-2.714 1.04-1.554.19-2.65.19-2.65-1.684-2.118-5.404-.16-5.407-.158.772-1.717.11-2.797.11-2.797C8.932.66 4.317 4.52 4.317 4.52zm10.448 7.79s-.467 4.16-6.447 4.16c-5.745 0-5.82-3.322-5.842-3.712 0 0-.073-4.423 6.58-4.654 5.94-.204 5.71 4.207 5.71 4.207zM18.65 7.045s1.018-4.37-3.864-3.818c0 0-.628.58.09 1.346 0 0 2.602-.58 2.397 2.598 0 0 .715.885 1.376-.125z"
								></path>
							</g>
						</g>
					</svg>
					微博
				</div>
			</span>
		</div>
		<button type="button" class="SignFlowHomepage-downloadBtn">
			<div>
				<svg width="20" height="20" fill="currentColor">
					<g fill="none" fill-rule="evenodd">
						<path
							fill="#0084FF"
							d="M15.234 0C18.125 0 20 1.875 20 4.766v10.468C20 18.125 18.125 20 15.234 20H4.766C1.875 20 0 18.125 0 15.234V4.766C0 1.875 1.875 0 4.766 0h10.468z"
						></path>
						<path d="M0 0h20v20H0z"></path>
						<path
							fill="#FFF"
							d="M10.313 10.352c0-.012-.004-1.036-.328-1.055h-2.26a48.42 48.42 0 0 0 .095-3.164h2.21c0-.003.084-.982-.37-.977H5.837c.15-.563.34-1.15.566-1.758 0 0-1.039 0-1.393.937-.146.386-.57 1.87-1.325 3.388.254-.028 1.095-.05 1.59-.963.091-.255.109-.289.222-.627h1.246c0 .452-.051 2.897-.072 3.164H4.414c-.507.019-.672 1.043-.672 1.055h2.832c-.19 2.15-1.209 3.972-3.058 5.413.884.253 1.766-.04 2.202-.43 0 0 .992-.906 1.536-3.004l2.33 2.817s.342-1.166-.053-1.734c-.328-.387-1.212-1.434-1.589-1.814l-.631.504a7.686 7.686 0 0 0 .34-1.752h2.662zM10.898 5v9.441h1.015l.334 1.145 1.82-1.144h2.144V5h-5.313zm4.258 8.398h-1.214l-1.212.782-.22-.782h-.518V6.016h3.164v7.382z"
						></path>
					</g>
				</svg>

				<span>下载知乎 App</span>
			</div>
		</button>
		<footer class="SignFlowHomepage-footer">
			<div class="ZhihuLinks">
				<a target="_blank" rel="noopener noreferrer" href="https://zhuanlan.zhihu.com">知乎专栏</a>
				<a target="_blank" rel="noopener noreferrer" href="/roundtable">圆桌</a>
				<a target="_blank" rel="noopener noreferrer" href="/explore">发现</a>
				<a target="_blank" rel="noopener noreferrer" href="/app">移动应用</a>
				<a target="_blank" rel="noopener noreferrer" href="/contact">联系我们</a>
				<a target="_blank" rel="noopener noreferrer" href="https://app.mokahr.com/apply/zhihu">来知乎工作</a>
				<a target="_blank" rel="noopener noreferrer" href="/org/signup">注册机构号</a>
			</div>
			<div class="ZhihuRights">
				<span>© 2020 知乎</span>
				<a target="_blank" rel="noopener noreferrer" href="https://tsm.miit.gov.cn/dxxzsp/">京 ICP 证 110745 号</a>
				<a target="_blank" rel="noopener noreferrer" href="http://www.beian.miit.gov.cn">京 ICP 备 13052560 号 - 1</a>
				<a target="_blank" rel="noopener noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088">
					<img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png" />
					京公网安备 11010802010035 号
				</a>
				<a href="https://zhstatic.zhihu.com/assets/zhihu/publish-license.jpg" target="_blank" rel="noopener noreferrer">出版物经营许可证</a>
			</div>
			<div class="ZhihuReports">
				<a target="_blank" rel="noopener noreferrer" href="https://zhuanlan.zhihu.com/p/51068775">侵权举报</a>
				<a target="_blank" rel="noopener noreferrer" href="http://www.12377.cn">网上有害信息举报专区</a>
				<a target="_blank" rel="noopener noreferrer" href="/jubao">儿童色情信息举报专区</a>
				<span>违法和不良信息举报：010-82716601</span>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			mobile: '',
			password: '',
			user: null,
			isActive: true,
			show: true,
			selected: 0
		};
	},
	created() {},
	methods: {
		changeTab: function() {
			this.isActive = !this.isActive;
			this.selected = this.selected == 0 ? 1 : 0;
		},
		signIn(mobile, password) {
			this.axios({
				method: 'post',
				url: 'http://localhost:8080/api/user/login',
				params: {
					mobile: this.mobile,
					password: this.password
				}
			}).then(res => {
				if (res.data.msg === '成功') {
					alert('登录成功');
					localStorage.setItem('user', JSON.stringify(res.data.data));
					this.$router.push('/home/recommoned');
				} else {
					alert(res.data.msg);
					alert('密码错误');
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.login-bar {
	background-image: url(../assets/image/1.png);
	background-repeat: no-repeat;
	background-color: #b8e5f8;
	background-size: cover;
	width: 100%;
	height: 100vh;
	overflow: auto;
	.logo {
		width: 128px;
		height: 81px;
		margin-bottom: 24px;
		margin-top: 40px;
	}
	.login-box {
		position: relative;
		height: 375px;
		width: 400px;
		.tab {
			float: left;
			.tab-item {
				font-size: 16px;
				line-height: 60px;
				color: #1a1a1a;
				font-weight: 600;
			}
		}
		.tab-box {
			height: 70%;
			width: 90%;
			margin: auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			.sign-account {
				border-bottom: 1px solid #ebebeb;
				margin-top: -60px;
			}
			.sign-password {
				position: relative;
				border-bottom: 1px solid #ebebeb;
				.account {
					width: 100%;
					height: 55px;
				}
				.SignFlow {
					position: absolute;
					right: 10px;
					top: 15px;
					color: #175199;
					font-size: 14px;
				}
				.SignFlow-ying {
					position: absolute;
					right: 10px;
					bottom: -30px;
					color: #8590a6;
					font-size: 14px;
				}
			}
			.sign-number {
				border-bottom: 1px solid #ebebeb;
				margin-top: -35px;
			}
			.Input-password {
				border-bottom: 1px solid #ebebeb;
			}
			.wji {
				margin-top: 15px;
				.haiwi {
					float: left;
					background-color: white;
				}
				.wj {
					float: right;
					background-color: white;
				}
			}
		}
		.SignContainer-tip {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 12px 24px;
			color: grey;
			font-size: 13px;
			background-color: #f6f6f6;
			.qian {
				margin-left: -118px;
			}
			a {
				color: grey;
			}
		}
	}
}
.Select-button {
	height: 50px;
	font-size: 15px;
	color: #8590a6;
	background-color: white;
	.china {
		position: relative;
		top: -5px;
	}
}
.SignFlow-accountSeperator {
	width: 1px;
	height: 22px;
	margin: 0 12px;
	margin-top: 15px;

	background: #ebebeb;
}
.submitButton {
	position: relative;
	top: 63px;
	height: 38px;
	color: #fff;
	background-color: #0084ff;
	font-size: 14px;
	line-height: 32px;
	border-radius: 3px;
}
.submitButton1 {
	position: relative;
	top: 28px;
	height: 38px;
	color: #fff;
	background-color: #0084ff;
	font-size: 14px;
	line-height: 32px;
	border-radius: 3px;
}
.Input {
	float: left;
	background: transparent;
	border: none;
	color: #1a1a1a;
	line-height: 24px;
	height: 55px;
}
.login-social {
	margin: 0 auto;
	text-align: center;
	margin-bottom: 10px;
	background: #fff;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	color: #8590a6;
	margin-top: 24px;
	width: 400px;
	border-radius: 4px;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
	height: 60px;
	line-height: 60px;
	padding: 0 24px;
	overflow: visible;
	.login-btngroup {
		color: #8590a6;
		line-height: 60px;
		display: flex;
		margin-left: 2px;
		transition: opacity 0.3s ease;
	}
	.login-btn {
		color: #8590a6;
		line-height: 60px;
		display: inline-flex;
		-webkit-box-align: center;
		align-items: center;
		cursor: pointer;
		margin-left: 20px;
	}
	svg {
		margin-right: 5px;
	}
}
.SignFlowHomepage-downloadBtn {
	position: relative;
	background: #fff;
	border: none;
	color: #0084ff;
	width: 400px;
	height: 42px;
	margin-top: 14px;
	display: inline-block;
	padding: 0 16px;
	font-size: 14px;
	line-height: 32px;
	text-align: center;
	cursor: pointer;
	svg {
		position: absolute;
		top: 10px;
		left: 130px;
	}
}
.SignFlowHomepage-footer {
	margin-top: 30px;
	font-size: 12px;
	line-height: 21px;
	text-align: center;
	color: #fff;
	text-shadow: 0 1px 2px #999;
	padding-bottom: 20px;
	a {
		color: white;
	}
}

.active {
	color: black;
	font-weight: 700;
	border-bottom: 3px solid #0084ff;
}
</style>
