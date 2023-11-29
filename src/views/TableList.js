/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  FormGroup,
} from "reactstrap";

import Select from "react-select"

import { useNavigate } from "react-router-dom";
import { getBerita, goEdit, deleteArtikel } from "actions/ArtikelActions";
import { connect } from "react-redux";

function Tables({endpoint, data, news_id, getBerita, goEdit, deleteArtikel}) {
  const navigate = useNavigate()
  var no = 1
  const options = [
    { value: null, label: 'Pilih Kategori' },
    { value: 1, label: "Pemilu" },
    { value: 2, label: "Keuangan" },
    { value: 3, label: "Kebutuhan Primer" },
    { value: 4, label: "Alam" },
  ];
  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: "#000000"
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#212529",
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };

  var [kategori_id, setKategoriId] = useState(null)
  var [newsId, setNewsId] = useState(null)

  function changeOption(event){
    setKategoriId(event.value)
  }

  function launchEdit(payload){
    goEdit({news_id: payload})
  }

  React.useEffect(() => {
    getBerita(endpoint)
  }, [endpoint, getBerita])

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
                <div style={{ display: "flex" }}>
                <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Kategori</label>
                        <Select
                          options={options}
                          styles={customStyles}
                          onChange={changeOption}
                        />
                      </FormGroup>
                    </Col>
                  <Button className="btn-fill" style={{marginLeft: 'auto'}} color="primary" type="submit" onClick={() => navigate('/admin/form-artikel')}>
                    Artikel Baru
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>No</th>
                      <th>Judul</th>
                      <th>Detail Singkat</th>
                      <th className="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      (kategori_id === null ? data : data.filter((data) => data.kategori_id.includes(kategori_id))).map((value, i) => {
                        return (
                          <tr key={i}>
                            <td>{no++}</td>
                            <td>{value.news_title}</td>
                            <td className="short-desc">{value.news_description}</td>
                            <td className="text-center">
                              <button className="button-new">Lihat</button>
                              <button className="button-new button-new2" onClick={() => {
                                launchEdit(value.news_id)
                              }}>Ubah</button>
                              <button className="button-new button-new3" onClick={() => deleteArtikel(endpoint + 'hapus-berita', {news_id: value.news_id})}>Hapus</button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          {/* <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Table on Plain Background</CardTitle>
                <p className="category">Here is a subtitle for this table</p>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td className="text-center">$98,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
      </div>
    </>
  );
}

const mapState = (state) => ({
  data: state.berita.data,
  endpoint: state.berita.endpoint,
  news_id: state.berita.news_id
})

const mapDispatch = {
  getBerita,
  goEdit,
  deleteArtikel
}
export default connect(mapState, mapDispatch)(Tables);
