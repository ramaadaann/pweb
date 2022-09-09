/**
 * Created by Muhamad Firly Ramadan
 * Instagram: @mframadann
 * Technical information - Backend Developer
 * Copy this code? please don't remove this watermark
 */

const FriendList = [
  {
    name: "Laylatunna'imah",
    address: "Losari",
  },
  {
    name: "Rizki Fauzan",
    address: "Tukmudal",
  },
  {
    name: "Singgih budi purnadi",
    address: "Panguragan",
  },
  {
    name: "Rizky Maulana",
    address: "Kesambi",
  },
  {
    name: "Khoirudin",
    address: "Tengah tani",
  },
  {
    name: "Muhammad ridho",
    address: "Ciwaringin",
  },
  {
    name: "Rizal Rayyan Firdaus",
    address: "Sumber",
  },
  {
    name: "Adhivia Julian",
    address: "Ciamis",
  },
  {
    name: "Rijal wijaya",
    address: "Mundu",
  },
  {
    name: "Muhammad Fatha",
    address: "Babakan",
  },
];

$(document).ready(() => {
  var GetDataLists = localStorage.getItem("lists") || FriendList;

  var DataLists =
    typeof GetDataLists == "object" ? FriendList : JSON.parse(GetDataLists);

  function GetDynamicData(arr) {
    let i = 1;
    return arr.map((arr) => {
      return `
         <tr>
          <td class="element">${i++}</td>
          <td class="element">${arr.name}</td>
          <td class="element">${arr.address}</td>
          <td class="updates" data-items="${arr.name}, ${
        arr.address
      }">UPDATE</td>
          <td class="deletes" data-items="${arr.name}, ${
        arr.address
      }">DELETE</td>
        </tr>
      `;
    });
  }

  $("#AddList").click(() => {
    let name = prompt("Insert your name");
    let address = prompt("Insert your address");

    if (name == "" || name == null || address == "" || address == null) {
      alert("Sory, name or address cannot be null try again");

      return false;
    }

    DataLists.push({
      name,
      address,
    });

    localStorage.setItem("lists", JSON.stringify(DataLists));
    alert("New data hasbeen added.");
    document.location.href = "../P03/P03_jquery_table.html";
  });

  $("#body").html(GetDynamicData(DataLists));
  $(".element").click(function () {
    let element = $(this).text();
    alert(`You clicked table column with value: "${element}"`);
  });

  $(".updates").click(function () {
    let item = $(this).data("items").split(",");
    let NewNameItem = prompt(`Insert new name, edited [${item[0]}]`);
    let isAddressUpdate = confirm("Do you wan't to edit address to?");

    const FindData = DataLists.filter((name) => name.name == item[0]);

    if (FindData.length < 1) {
      alert("Cannot find this data because data is null or deleted.");

      return false;
    }

    FindData[0].name = NewNameItem == "" ? item[0] : NewNameItem;

    if (isAddressUpdate) {
      let NewAddressItem = prompt("Insert new address");
      FindData[0].address = NewAddressItem == "" ? item[1] : NewAddressItem;
      alert(
        `Address hasbeen updated ${item[1]} => ${
          NewAddressItem == "" ? item[1] : NewAddressItem
        }`
      );
    }

    localStorage.setItem("lists", JSON.stringify(DataLists));

    alert(`Update successfully`);

    document.location.href = "../P03/P03_jquery_table.html";
  });

  $(".deletes").click(function () {
    let item = $(this).data("items").split(",");
    let Isdeleted = confirm(
      `Are you sure to delete ${item[0]} with address ${item[1]}`
    );

    const IsTrue = () => {
      const FindData = DataLists.filter((name) => name.name != item[0]);
      localStorage.setItem("lists", JSON.stringify(FindData));
      alert(`${item[0]} with address ${item[1]} hasbeen successfully deleted.`);
      document.location.href = "../P03/P03_jquery_table.html";
    };

    const isFalse = () => {
      alert("Cancel deleted");
    };

    Isdeleted ? IsTrue() : isFalse();
  });
});
