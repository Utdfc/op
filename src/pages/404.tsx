import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='md:text-6xl mt-8 text-4xl dark:text-neutral-200'>
              你小子迷路了吧。啊哈哈，大家快来看啊，有个吊毛迷路了！
            </h1>
            <ArrowLink
              className='md:text-lg mt-4 dark:text-neutral-200'
              href='/'
            >
              点我回家啊！
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
