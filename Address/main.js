fetch("/test.json")
  .then((response) => response.json())
  .then((data) => {
      const select = document.getElementById('area');
      data.addresses.area.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;

        select.append(option);
      });
      {
        const select = document.getElementById('street_type');
        data.addresses.street_type.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('street');
        data.addresses.street.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('building');
        data.addresses.building.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
      {
        const select = document.getElementById('zip');
        data.addresses.zip.forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          option.textContent = item;
  
          select.append(option);
        });
      }
  });