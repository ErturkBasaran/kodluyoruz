import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe("Homework4 testleri", () => {

  beforeEach(() => {
    render(<App />)
  })


  test("Başlık kısmının başarılı bir şekilde render edildiğinin kontrol edilmesi", () => {

    const title = screen.getByText("Emoji Search")
    expect(title).toBeInTheDocument

  })

  test("Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini n kontrol edilmesi", () => {

    const emojis = screen.getAllByText(/Click to copy emoji/i)
    expect(emojis.length).toEqual(20)

  })

  test("Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edildiğinin kontrol edilmesi", () => {


    const name_1 = "Smiley"
    const input_1 = screen.getByPlaceholderText("Please search")
    userEvent.type(input_1, name_1)

    const emojis_1 = screen.getAllByText(/Click to copy emoji/i)


    expect(emojis_1.length).toEqual(2)

  })

  // test("Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığının kontrol edilmesi", () => {
    
  // })

})

