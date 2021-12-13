export const stringConstants = {
  ALERT: '잘못된 값을 입력하셨습니다.',
};

export const headerConstants = {
  HEADER_TITLE: '🥤자판기🥤',
  TAB_BUTTONS: ['상품 관리', '잔돈 충전', '상품 구매'],
};

export const addProductFormConstants = {
  TITLE: '상품 추가하기',
  FORM_ID: 'product-add-form',
  INPUT_PLACEHOLDERS: ['상품명', '가격', '수량'],
  INPUT_IDS: [
    'product-name-input',
    'product-price-input',
    'product-quantity-input',
  ],
  BUTTON_ID: 'product-add-button',
  BUTTON_VALUE: '추가하기',
};

export const chargeChangesFormConstants = {
  TITLE: '자판기 동전 충전하기',
  FORM_ID: 'vending-machine-charge-form',
  INPUT_PLACEHOLDERS: ['자판기가 보유할 금액'],
  INPUT_IDS: ['vending-machine-charge-input'],
  BUTTON_ID: 'vending-machine-charge-button',
  BUTTON_VALUE: '충전하기',
};

export const inputAmountFormConstants = {
  TITLE: '금액 투입',
  FORM_ID: 'charge-form',
  INPUT_PLACEHOLDERS: ['투입할 금액'],
  INPUT_IDS: ['charge-input'],
  BUTTON_ID: 'charge-button',
  BUTTON_VALUE: '투입하기',
};

export const productItemsTableConstants = {
  TITLE: '상품 현황',
  TH_IDS: [
    'product-items-name',
    'product-items-price',
    'product-items-quantity',
  ],
  TH_VALUE: ['상품명', '가격', '수량'],
};

export const coinItemsTableConstants = {
  TITLE: '자판기가 보유한 동전',
  TH_IDS: ['', ''],
  TH_VALUE: ['동전', '개수'],
};

export const changesCoinItemsTableConstants = {
  TITLE: '잔돈',
  TH_IDS: ['', ''],
  TH_VALUE: ['동전', '개수'],
  THEAD_ID: 'changes-coins-table-head',
  TBODY_ID: 'changes-coins-table-body',
};

export const purchasableProductItemsTableConstants = {
  TITLE: '구매할 수 있는 상품 현황',
  TH_IDS: ['', '', '', ''],
  TH_VALUE: ['상품명', '가격', '수량', '구매'],
  THEAD_ID: 'purchasable-product-table-head',
  TBODY_ID: 'purchasable-product-table-body',
};

export const chargeChangesSpanConstants = {
  P_VALUE: '보유 금액',
  SPAN_ID: 'vending-machine-charge-amount',
};

export const inputtedAmountSpanConstants = {
  P_VALUE: '투입한 금액',
  SPAN_ID: 'charge-amount',
};

export const coinItemsConstants = {
  CONTAINER_ID: 'tbody',
  ITEM_ID: [
    'vending-machine-coin-500-quantity',
    'vending-machine-coin-100-quantity',
    'vending-machine-coin-50-quantity',
    'vending-machine-coin-10-quantity',
  ],
};

export const changesCoinItemsConstants = {
  CONTAINER_ID: '#changes-coins-table-body',
  ITEM_ID: [
    'coin-500-quantity',
    'coin-100-quantity',
    'coin-50-quantity',
    'coin-10-quantity',
  ],
};

export const productItemsConstants = {
  TD_ID: [
    'product-manage-name',
    'product-manage-price',
    'product-manage-quantity',
  ],
  CONTAINER_ID: 'tbody',
};

export const purchableProductItemsConstants = {
  TD_ID: [
    'product-purchase-name',
    'product-purchase-price',
    ' product-purchase-quantity',
  ],
  CONTAINER_ID: '#purchasable-product-table-body',
};
