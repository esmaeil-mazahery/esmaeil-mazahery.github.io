$(document).ready(function () {
  $("ul.tree")
    .find(".caret")
    .each(function (index) {
      this.addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    });

  $(".sidebarـsub_category + .libdoc-sidebar-item")
    .find(".caret")
    .each(function (index) {
      this.addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    });
});
