const inquiryForm = document.querySelector('#studio-inquiry');

if (inquiryForm) {
  const plans = { basic: '基本版 NT$ 4,999', pro: '專業版 NT$ 6,999', business: '商業版 NT$ 9,999' };
  const selectedPlan = plans[new URLSearchParams(window.location.search).get('plan')];
  const requirements = inquiryForm.querySelector('[name="requirements"]');
  if (selectedPlan && !requirements.value) {
    requirements.value = `我想洽詢${selectedPlan}。\n\n需求與預算：`;
  }
  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = new FormData(inquiryForm);
    const subject = `大雄工作室服務洽詢｜${values.get('name').trim()}`;
    const body = [
      `名字：${values.get('name').trim()}`,
      `Email：${values.get('email').trim()}`,
      '',
      '想要的需求及預算：',
      values.get('requirements').trim(),
    ].join('\r\n');
    window.location.href = `mailto:fox.n1123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
