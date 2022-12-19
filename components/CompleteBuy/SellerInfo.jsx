import React from "react";

const SellerInfo = (props)=>{
    return(
        <div>
             <table class="min-w-full border text-center">
              <tbody>
                <tr class="border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    收款銀行
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                    {props.bank}700
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    收款銀行帳戶
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                    {props.account}04011001175224
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    訂購金額
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r">
                    {props.price}
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    付款期限
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r">
                    {props.date}
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    );
};

export default SellerInfo;