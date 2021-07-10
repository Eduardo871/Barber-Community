import React, { useState } from 'react'
import { getGuestCart, removeFromGuestCart } from '../../../redux/action/cart'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export const Cart = () => {

  const carrito = getGuestCart()
  const [cart, setCart] = useState(carrito)

  const deleteItem = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromGuestCart(item)
        setCart(getGuestCart())
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <div class="h-full md:h-screen w-4/5 mx-auto mt-10 bg-background text-primary">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">

          {cart && cart.totalAmount !== 0 ?
            cart.items.map(item => {
              return <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
                <div class="flex justify-between px-4 items-center">
                  <div class="text-lg font-semibold uppercase">
                    <p>{item.name}</p>
                    <p class="text-lg font-bold"> ${item.price} </p>
                  </div>
                  <div class="text-lg font-semibold transform rotate-45">
                    <button class="focus:outline-none bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-2 rounded-full inline-flex items-center "
                      onClick={() => deleteItem(item)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            })
            : <div className=" flex flex-col items-center h-full justify-center bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24"><path d="M10.028 15h-5.413l-4.615-11h15l-.564 2h-11.428l2.938 7h2.678l1.404 2zm7.544-5.439l1.756-5.561h1.929l.743-2h-4.195l-2.489 7.979 2.256-.418zm-10.072 6.439c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm14.011-3.454c1.44 2.018 1.041 3.439 2.489 5.471l-5.585 3.983c-3.015-2.246-5.617-2.966-6.458-3.248-.801-.27-1.317-.783-1.14-1.428.181-.652.862-.846 1.424-.821.848.039 1.536.293 1.536.293l-3.896-5.461c-.348-.488-.234-1.165.254-1.512.486-.348 1.163-.234 1.511.253l2.639 3.693c.127.178.374.22.553.093.179-.127.22-.375.093-.553l-.65-.912 1.047-.261c.274-.067.562.04.726.27l.532.746c.127.179.374.22.553.093.179-.127.22-.375.093-.554l-.614-.861 1.027-.23c.27-.058.548.05.708.274l.452.634c.127.178.375.219.553.093.179-.127.22-.375.093-.553l-.507-.71.303-.054c1.052-.186 1.623.363 2.264 1.262zm-12.006-3.597c.676-.482 1.55-.498 2.201.002-.371-1.242-1.856-1.754-2.913-1-1.059.756-1.054 2.326-.003 3.079-.261-.778.039-1.599.715-2.081z" /></svg>                <h1 className="text-lg font-semibold">Your Cart Looks Empty</h1>
            </div>
          }

        </div>
        <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">

          <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">

            {/* <!-- Total Price --> */}
            <div class="flex justify-center items-center text-center">
              <div class="text-xl font-semibold">
                <p class="">TOTAL PRICE</p>
                <p class="text-5xl my-2 mt-3">${cart.totalAmount}</p>
              </div>
            </div>
            {/* <!-- End Total PRice --> */}
          </div>
          <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
            <div class="flex justify-center items-center text-center">
              <div class="text-xl font-semibold">
                <Link to="/loginClients">
                  <button
                    className="bg-green-400 hover:bg-green-700 px-4 rounded py-2">
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;