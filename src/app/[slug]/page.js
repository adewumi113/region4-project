'use client'
import Link from 'next/link'

export default function Detail () {

    return (
        <main className='flex min-h-screen flex-col  p-8 lg:p-24'>

            <aside className='w-full lg:w-1/2 mx-auto mt-14'>
                <div className='text-left'>
                    <h3 className='uppercase text-lg mb-5 pb-3 border-b border-zinc-300 dark:border-zinc-600 '>
                        This is the title of the result
                    </h3>

                    <p className='text-justify dark:text-zinc-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                    Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>

                </div>
                <Link href={'/'}><button className='bg-blue-400 px-3 mt-5 rounded'> {`<< Back`}</button></Link>
            </aside>

            
        </main>
    )
}