import React from "react";

const PointList = (props) => {
  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Record
              </th>
              <th scope="col" class="px-6 py-3">
                Points
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Valid from
              </th>
              <th scope="col" class="px-6 py-3">
                Expiration date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {props.recordName}
              </th>
              <td class="px-6 py-4">{props.points}</td>
              <td class="px-6 py-4">{props.status}</td>
              <td class="px-6 py-4">{props.validFrom}</td>
              <td class="px-6 py-4">{props.expirationDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointList;
