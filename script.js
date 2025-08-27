document.addEventListener('DOMContentLoaded',()=>{
  const yearEl=document.getElementById('year');
  if(yearEl) yearEl.textContent=new Date().getFullYear();
  const form=document.getElementById('quoteForm');
  const status=document.getElementById('formStatus');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const data=new FormData(form);
      if(!data.get('name')||!data.get('phone')||!data.get('service')){
        status.textContent='Please fill required fields.';status.style.color='red';return;
      }
      status.textContent='Thank you! We will contact you soon.';status.style.color='green';
      form.reset();
    });
  }
});