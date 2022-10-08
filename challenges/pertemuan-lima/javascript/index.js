$(document).ready(function () {
  $(".data").click(function () {
    let isi = $(this).text();
    let tid = $(this).prop("id");
    let rid = tid.split("__");
    let id_baris = rid[1];
    let nama_mhs = $("#nama_mhs__" + id_baris).text();

    if (isi == "Hapus") {
      let konfirmasi = confirm(
        `Anda yakin ingin menghapus data atas nama ${nama_mhs}?`
      );
      if (!konfirmasi) return;

      $("#baris__" + id_baris).fadeOut();
    } else {
      alert("Anda mengklik kolom yang berisi : " + $(this).html() + "!");
    }
  });

  $(".toggle").click(function () {
    // $(".slide-content").toggleClass("disappear");
    $(".slide-content").slideToggle("slow");
  });

  const content = [
    {
      name: "Hello 👋, I`am Muhamad Firly Ramadan",
    },
    {
      name: "I am a student and Back End Developer",
    },
    {
      name: "Comming soon ✌",
    },
    {
      name: "Look at your self 😜",
    },
  ];

  const contents = content.map((item, i) => {
    return `
       <div class="content-menu-${i}">
         <div class="content-wrapper">
           <h1 class="content">${item.name}</h1>
         </div>
      </div>
    `;
  });

  content.map((item, i) => {
    $(`.${i + 1}`).click(() => {
      $(`.${i + 1}`).css({ "font-weight": "bold", color: "#3b71fe" });
      $(`.${i + 1}`)
        .siblings()
        .css({ "font-weight": "normal", color: "#262626" });

      $(`.content-menu-${i}`).slideToggle("slow");
      $(`.content-menu-${i}`).siblings().css("display", "none");
    });
  });

  $(".content-menu-wrapper").html(contents);
});
