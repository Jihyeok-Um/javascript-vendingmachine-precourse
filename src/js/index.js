// prettier-ignore
import { renderProductAddMenu, renderVendingMachineManageMenu, renderProductPurchaseMenu } from './render.js';
import { $ } from './util/dom.js';
import { addMenu } from './addMenu.js';
import { addChanges, returnCoin } from './changes.js';
import { addMoney } from './money.js';
import { purchaseItems } from './items.js';

function App() {
  renderProductAddMenu();
  const handleClick = e => {
    if (e.target.id === 'product-add-menu') {
      renderProductAddMenu();
    } else if (e.target.id === 'vending-machine-manage-menu') {
      renderVendingMachineManageMenu();
    } else if (e.target.id === 'product-purchase-menu') {
      renderProductPurchaseMenu();
    } else if (e.target.classList.contains('purchase-button')) {
      purchaseItems(e.target);
    } else if (e.target.id === 'coin-return-button') {
      returnCoin();
    }
  };
  const handleSubmit = e => {
    if (e.target.id === 'product-add-form') {
      addMenu(e);
    } else if (e.target.id === 'vending-machine-charge-form') {
      addChanges(e);
    } else if (e.target.id === 'charge-form') {
      addMoney(e);
    }
  };

  $('#app').addEventListener('click', handleClick);
  $('#app').addEventListener('submit', handleSubmit);
}

const app = new App();
