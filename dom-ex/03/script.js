const tasks = [
    'Complete the project',
    'Attend the meeting',
    'Write a report',
    'Review the code',
    'Fix the bugs',
    'Update the documentation',
    'Plan the next sprint',
    'Conduct user testing',
    'Optimize the performance',
    'Design',
  ];
  
  // Select DOM elements
  const addItemBtn = document.getElementById('add-item-btn');
  const alertBtn = document.getElementById('alert-btn');
  const consoleBtn = document.getElementById('console-btn');
  const itemList = document.getElementById('item-list');
  
  addItemBtn.addEventListener('click', () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    
    const newItem = document.createElement('li');
    newItem.textContent = randomTask;
    newItem.classList.add('p-2', 'border-b', 'border-gray-200'); // Style the new item
    
    itemList.appendChild(newItem);
    
    itemList.scrollTop = itemList.scrollHeight;
  });
  
  alertBtn.addEventListener('click', () => {
    alert('This is a custom alert message!');
  });
  
  consoleBtn.addEventListener('click', () => {
    console.log('This is a custom message logged to the console.');
  });