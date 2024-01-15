

function emailValidation() {
    const form = document.getElementById('form') //formの取得
    const confirm = document.getElementById('email_confirm') //メール確認フォームの取得
    const alertclass = document.getElementsByClassName('alert') //アラートメッセージのクラス
    form.addEventListener('input', e => {
      e.preventDefault();
      const element = document.createElement('tr')
      const target = form.content.parentElement //内容フォームの親(td.contact_input)の指定
      const parenttarget = target.parentElement //td.contact_inputの親（tr）の指定
      if(form.email.value !== form.email_confirm.value ) {
        if(alertclass.length!==1){
            const message = document.createTextNode("Eメールが一致しません")
            parenttarget.parentElement.insertBefore(element, parenttarget)
            element.appendChild(message)
            element.classList.add("alert")
            confirm.classList.add("alert_box")
        }
        else {
            return;
        }
      } 
      else {
        const parent = parenttarget.parentElement
        parent.removeChild(alertclass[0]) //現状1つだけのためアラートメッセージクラスの配列指定をしているが、増やす場合は要検討
        confirm.classList.remove("alert_box")
        return
      }
    });
  };
  
  window.onload = emailValidation

