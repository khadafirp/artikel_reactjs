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
import { NavLink, useNavigate } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import Select from "react-select"

import { tambahArtikel, filterArtikel } from "actions/ArtikelActions";
import { connect } from "react-redux";

function FormArtikel({endpoint, news_id, kategori_id, news_title, news_description, tambahArtikel, filterArtikel}) {
  const navigate = useNavigate()
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

  var [kategoriId, setKategoriId] = useState(null)
  var [newsId, setNewsId] = useState(news_id)
  var [newsTitle, setNewsTitle] = useState(null)
  var [newsDescription, setNewsDescription] = useState(null)

  function handleKategoriId(event){
    setKategoriId(event.value)
  }

  function handleNewsTitle(event){
    setNewsTitle(event.target.value)
  }

  function handleNewsDescription(event){
    setNewsDescription(event.target.value)
  }

  React.useEffect(() => {
    if(news_id !== null){
        filterArtikel(
            endpoint + 'filter-berita',
            {
                news_id: news_id
            }
        )
    }
  }, [endpoint, filterArtikel, news_id])

  return (
    <>
        <div className="content">
            <Col>
                <Card>
                <CardHeader>
                    <h5 className="title">
                        {news_id === null ? 'Tambah Berita' : 'Ubah Berita'}
                    </h5>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Col className="px-md-1" md="12">
                            <FormGroup>
                                <label>Kategori</label>
                                <Select
                                options={options}
                                styles={customStyles}
                                onChange={handleKategoriId}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>Judul</label>
                                <Input
                                placeholder="Judul"
                                type="text"
                                defaultValue={news_title}
                                onChange={handleNewsTitle}
                                />
                            </FormGroup>
                                <FormGroup>
                                <label>Deskripsi</label>
                                <Input
                                placeholder="Deskripsi"
                                type="textarea"
                                defaultValue={news_description}
                                onChange={handleNewsDescription}
                                />
                            </FormGroup>
                        </Col>
                    </Form>
                </CardBody>
                <CardFooter>
                    {/* <NavLink to={-1} replace> */}
                    <Button className="btn-fill" color="primary" type="submit" onClick={() => tambahArtikel(endpoint + 'tambah-berita', {
                        kategori_id: kategoriId,
                        news_title: newsTitle,
                        news_description: newsDescription
                    })}>
                        Simpan
                    </Button>
                    {/* </NavLink> */}
                </CardFooter>
                </Card>
            </Col>
      </div>
    </>
  );
}

const mapState = (state) => ({
    news_id: state.berita.news_id,
    kategori_id: state.berita.kategori_id,
    news_title: state.berita.news_title,
    news_description: state.berita.news_description,
    endpoint: state.berita.endpoint
})

const mapDispatch = {
    tambahArtikel,
    filterArtikel
}

export default connect(mapState, mapDispatch)(FormArtikel);
