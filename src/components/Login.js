import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginContainer>
      <CTA>
        <CTALogo1 src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          mollitia repellat fugit vel quam dolorem, nihil reiciendis, architecto
          similique doloremque at cupiditate itaque sapiente porro.
        </Description>
        <CTALogo2 src="/images/cta-logo-two.png" />
      </CTA>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background: url("images/login-background.jpg") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;
  }
`;

const CTA = styled.div`
  max-width: 840px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 140px;
  gap: 1.4rem;
`;

const CTALogo1 = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background: #0063e5;
  font-weight: bold;
  padding: 15px 10px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  letter-spacing: 1.4px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  text-align: center;
  letter-spacing: 1.5px;
  font-size: 11px;
  line-height: 1.5;
`;
const CTALogo2 = styled(CTALogo1)`
  padding: 0 1rem;
`;
