'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [searchKeyword, setSearchKeyword] = useState('')

  const search = () => {
    //TODO: In a production ready system, all input should be validated

  }

  return (
    <main className='flex min-h-screen flex-col  p-8 lg:p-24'>
      <aside className='text-center mt-24 lg:mt-5'>
          <h2 className='text-4xl'>
            SearchTube
            <small className='block text-sm italic'>for Robert Half</small>
          </h2>
          <input type='text' value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)} placeholder='Your search keyword' className='mt-5 w-full lg:w-1/2 py-2 px-8 rounded-full border border-zinc-200 bg-zinc-100 dark:bg-zinc-600 dark:border-zinc-400' />
          <br/>
          <button type='submit' onClick={search} className='inline-block mt-5 capitalize bg-blue-400 px-5 py-1 rounded-full'>search</button>
      </aside>

      <aside className='w-full lg:w-1/2 mx-auto mt-14'>
          <div className='text-left'>
            <Link href={`/slug-to-visit`}>
              <h3 className='capitalize text-lg mb-5 pb-3 border-b border-zinc-300 dark:border-zinc-600 '>
                This is the title of the result
                <small className='block text-zinc-400 text-sm italic'>A little description about the product</small>
              </h3>

            </Link>

          </div>

      </aside>
    </main>
  )
}
