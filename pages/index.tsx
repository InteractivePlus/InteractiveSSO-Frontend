import * as G from "./componets/sso";

export default function Home() {
  return (
    <G.SSOContainer>
      <G.SSOBody>
        <G.FormContainer>

          <G.XSYDFormLogo />
          <G.FormTitle title="登录" />
          <G.Form username="用户名" password="密码"></G.Form>

          <G.FormButton text="登录"></G.FormButton>

          <G.FormButtomLink left="忘记密码" right="没有账号?" />
        </G.FormContainer>
      </G.SSOBody>
      <G.Footer></G.Footer>
    </G.SSOContainer >
  );
}
