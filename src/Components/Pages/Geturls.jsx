import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "datatables.net-bs4/js/dataTables.bootstrap4.min.js";
// import "datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css";
import "datatables.net-buttons/js/buttons.html5.min.js";
import "datatables.net-buttons/js/buttons.print.min.js";
import "datatables.net-buttons/js/buttons.colVis.min.js";

export const Geturls = () => {
  useEffect(() => {
    document.title = "DataTable";

    const table = $("#table").DataTable({
      ajax: "https://api.allorigins.win/raw?url=https://gitlab.com/Ethicist/fileshare/-/raw/master/data.json",
      dom:
        "<'row'<'col-sm-12 col-md-4'l><'col-sm-12 col-md-4 dt-buttons text-center'B><'col-sm-12 col-md-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5 entries'i><'col-sm-12 col-md-7'p>>",
      paging: true,
      autoWidth: true,
      //   buttons: ["copyHtml5", "csvHtml5", "excelHtml5", "pdfHtml5", "print"],
      responsive: true,
      destroy: true,
      deferRender: true,
      columnDefs: [
        {
          targets: 0,
          render: function (data, type, row, meta) {
            if (type === "display") {
              return (
                '<i class="fa fa-external-link" aria-hidden="true"></i>' +
                $("<a>")
                  .attr("href", data)
                  .attr("target", "_blank")
                  .text(data)
                  .wrap("<div></div>")
                  .parent()
                  .html()
              );
            } else {
              return data;
            }
          },
        },
        {
          targets: 1,
          render: function (data, type, row, meta) {
            if (data === "OK" || data === "Up again") {
              return $("<span>")
                .attr("class", "green")
                .text(data)
                .wrap("<div></div>")
                .parent()
                .html();
            } else {
              return $("<span>")
                .attr("class", "red")
                .text(data)
                .wrap("<div></div>")
                .parent()
                .html();
            }
          },
        },
      ],
    });

    return () => {
      // Clean up DataTable instance when the component is unmounted
      table.destroy();
    };
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <div className="ddddddd">
      <div className="title-text"></div>

      <table
        id="table"
        className="table table-striped table-bordered"
        style={{ width: "100%" }} // Set width to percentage
      >
        <thead>
          <tr>
            <th>TITLE</th>
            <th>URL</th>
            <th>Delete</th>
            <th>Info</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
