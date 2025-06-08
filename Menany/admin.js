document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup-form');
  const form = document.getElementById('dynamic-form');
  const fieldsContainer = document.getElementById('form-fields');
  const popupTitle = document.getElementById('popup-title');
  const cancelBtn = document.getElementById('cancel-btn');

  let currentSection = null;
  let currentTable = null;
  let currentFields = [];

  // Field templates by section
  const formConfigs = {
    'Vehicle Management': [
      ['Registration Number'], ['Vehicle Type'], ['Insurance & Inspection Status'],
      ['Seating Capacity'], ['Assigned Driver'], ['GPS Tracking Link']
    ],
    'Staff Management': [
      ['Full Name'], ['ID Number'], ['Contact Info'], ['Role'],
      ['License Number & Validity'], ['Assigned Matatu'], ['Employment Start Date']
    ],
    'Route Management': [
      ['Route Name'], ['Route Number'], ['Stages / Stops'],
      ['Distance (km)'], ['Fare per Stop/Zone'], ['Assigned Vehicles'], ['Daily Trips']
    ],
    'Customer Feedback': [
      ['Complaint'], ['Category'], ['Status'], ['Passenger Info']
    ]
  };

  function showPopup(section, table, title) {
    popupTitle.textContent = `Add ${title}`;
    currentSection = section;
    currentTable = table;
    currentFields = formConfigs[title];

    fieldsContainer.innerHTML = '';
    currentFields.forEach(([label]) => {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = label;
      input.placeholder = label;
      fieldsContainer.appendChild(input);
    });

    popup.style.display = 'flex';
  }

  function hidePopup() {
    popup.style.display = 'none';
    form.reset();
  }

  cancelBtn.addEventListener('click', hidePopup);

  // Form submission
  form.addEventListener('submit', e => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    const values = Array.from(inputs).map(input => input.value.trim());

    if (values.some(v => !v)) return alert("Please fill all fields.");

    const newRow = document.createElement('tr');

    if (popupTitle.textContent.includes('Vehicle')) {
      const statusClass = values[2].toLowerCase().includes('valid') ? 'status-valid' : 'status-expiring';
      newRow.innerHTML = `
        <td>${values[0]}</td><td>${values[1]}</td><td class="${statusClass}">${values[2]}</td>
        <td>${values[3]}</td><td>${values[4]}</td><td><a href="${values[5]}" target="_blank">View GPS</a></td>
        <td><button class="btn btn-delete">Delete</button></td>
      `;
    } else if (popupTitle.textContent.includes('Staff')) {
      newRow.innerHTML = `
        <td>${values[0]}</td><td>${values[1]}</td><td>${values[2]}</td>
        <td>${values[3]}</td><td>${values[4]}</td><td>${values[5]}</td><td>${values[6]}</td>
        <td><button class="btn btn-delete">Delete</button></td>
      `;
    } else if (popupTitle.textContent.includes('Route')) {
      newRow.innerHTML = `
        <td>${values[0]}</td><td>${values[1]}</td><td>${values[2]}</td>
        <td>${values[3]}</td><td>${values[4]}</td><td>${values[5]}</td><td>${values[6]}</td>
      `;
    } else if (popupTitle.textContent.includes('Customer')) {
      const statusClass = values[2].toLowerCase() === 'resolved' ? 'status-resolved' : 'status-pending';
      newRow.innerHTML = `
        <td>${values[0]}</td><td>${values[1]}</td><td class="${statusClass}">${values[2]}</td><td>${values[3]}</td>
      `;
    }

    currentTable.querySelector('tbody')?.appendChild(newRow) || currentTable.appendChild(newRow);
    hidePopup();
  });

  // Bind each "Add" button
  document.querySelectorAll('.section').forEach(section => {
    const btn = section.querySelector('.btn');
    const table = section.querySelector('table');
    const h2 = section.querySelector('h2')?.innerText;

    if (formConfigs[h2]) {
      btn?.addEventListener('click', () => showPopup(section, table, h2));
    }
  });

  // Delete functionality
  document.body.addEventListener('click', e => {
    if (e.target.classList.contains('btn-delete')) {
      if (confirm("Delete this entry?")) {
        e.target.closest('tr').remove();
      }
    }
  });
});

