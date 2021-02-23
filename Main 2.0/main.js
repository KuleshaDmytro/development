  fetch("/test.json")
  .then((response) => response.json())
  .then((data) => {
      const select = document.getElementById('property');
      data.propertys.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;

        select.append(option);
      });
      {
        const select = document.getElementById('email');
        data.email.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
    }
    {
      const select = document.getElementById('edrpou');
      data.edrpou.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;

        select.append(option);
      });
  }
  {
    const select = document.getElementById('passport');
      data.owner.documents[0].number.forEach(item => {
      const option = document.createElement('option');
      option.value = item;
      option.textContent = item;

      select.append(option);
    });
}
{
  const select = document.getElementById('issued_by');
    data.owner.documents[0].issued_by.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;

    select.append(option);
  });
}
{
  const select = document.getElementById('issued_at');
    data.owner.documents[0].issued_at.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;

    select.append(option);
  });
}
  });
   