
import Vue from 'vue';

import FormRecoveryPassword from "@/components/FormAuth/FormRecoveryPassword.vue";


describe("FormRecoveryPassword.vue", () => {
  
  
      // build component
      const Constructor = Vue.extend(FormRecoveryPassword);
      const FormRecoveryPasswordComponent = new Constructor().$mount();

      // simulate click event
      const button_submit = FormRecoveryPasswordComponent.$el.querySelector('input[type="submit"]');
      const clickEvent = new window.Event('click');

    it(' Invalid Email ', () => {

      // ---------------------------------------- //
      // -- Test Scenario :: Inputs & Ouputs ---- //  
      // ---------------------------------------- //
        const in_USER_email = 'wallamejorge@hotmail.com';
        const out_ERROR_PASSWORD_RESET = "-ERROINVALID EMAIL-";
      // ---------------------------------------- //


      // ---------------------------------------- //
      // -- Test Scenario :: Action's ----------- //
      // ---------------------------------------- //
        FormRecoveryPasswordComponent.USER.email = in_USER_email;
        button_submit.dispatchEvent(clickEvent);
      // ---------------------------------------- //


      // ---------------------------------------- //
      // -- Test Scenario :: Assert's ----------- //
      // ---------------------------------------- //
        expect(FormRecoveryPasswordComponent.ERROR.PASSWORD_RESET)
          .toBe(out_ERROR_PASSWORD_RESET);
      // ---------------------------------------- //

    });

    it(' Valid Email and Exist on Firebase ', async () => {

      // ---------------------------------------- //
      // -- Test Scenario :: Inputs & Ouputs ---- //  
      // ---------------------------------------- //
        const in_USER_email = 'EMAIL';
        const out_ERROR_PASSWORD_RESET = "ERRIR";
      // ---------------------------------------- //


      // ---------------------------------------- //
      // -- Test Scenario :: Action's ----------- //
      // ---------------------------------------- //
        FormRecoveryPasswordComponent.USER.email = in_USER_email;
        button_submit.dispatchEvent(clickEvent);

      // ---------------------------------------- //


      // ---------------------------------------- //
      // -- Test Scenario :: Assert's ----------- //
      // ---------------------------------------- //
        expect(FormRecoveryPasswordComponent.ERROR.PASSWORD_RESET)
          .toBe(out_ERROR_PASSWORD_RESET);
      // ---------------------------------------- //

    });

    it(' Valid Email and No Exist on Firebase ', () => {

      // ---------------------------------------- //
      // -- Test Scenario :: Inputs & Ouputs ---- //  
      // ---------------------------------------- //
        const in_USER_email = 'EMAIL';
        const out_ERROR_PASSWORD_RESET = "ERRIR";
      // ---------------------------------------- //


      // ---------------------------------------- //
      // -- Test Scenario :: Action's ----------- //
      // ---------------------------------------- //
        FormRecoveryPasswordComponent.USER.email = in_USER_email;
        button_submit.dispatchEvent(clickEvent);
      // ---------------------------------------- //


      // ---------------------------------------- //
      // -- Test Scenario :: Assert's ----------- //
      // ---------------------------------------- //
        expect(FormRecoveryPasswordComponent.ERROR.PASSWORD_RESET)
          .toBe(out_ERROR_PASSWORD_RESET);
      // ---------------------------------------- //

    });

});

