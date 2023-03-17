import React from "react";

const TableRender = ({ data }) => {
  return (
    <div>
        <center>
      <table border={"2"}>
        <tr>
          <th>Name</th>
          <th>Class Name</th>
        </tr>
        {data.map((data) => {
          return (
            <> 
            <tr>
              <td>{data.name}</td>
              <td>{data.class}</td>
              </tr>
            </>
          );
        })}
      </table>
      </center>
    </div>
  );
};

export default TableRender;
