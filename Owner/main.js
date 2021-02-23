fetch("/test.json")
  .then((response) => response.json())
  .then((data) => {
      const select = document.getElementById('fname');
      data.owner.first_name.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;

        select.append(option);
      });
      {
        const select = document.getElementById('sname');
        data.owner.second_name.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('lname');
        data.owner.last_name.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('tax_id');
        data.owner.tax_id.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('pnumber');
        data.phones.number.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('position');
        data.owner.position.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('birth_date');
        data.owner.birth_date.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('gender');
        data.owner.gender.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('email');
        data.owner.email.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('type');
        data.owner.documents.type.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('number');
        data.owner.documents.number.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('issued_by');
        data.medical_service_provider.licenses.issued_by.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('issued_at');
        data.medical_service_provider.licenses.issued_date.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('expiry_date');
        data.medical_service_provider.licenses.expiry_date.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
  });