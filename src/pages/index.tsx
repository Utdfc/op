import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';
import { SiBilibili, SiGithub, SiTwitter, SiYoutube } from 'react-icons/si';
import { InView } from 'react-intersection-observer';

import { trackEvent } from '@/lib/analytics';
import clsxm from '@/lib/clsxm';
import { getAllFilesFrontmatter, getFeatured } from '@/lib/mdx';
import { generateRss } from '@/lib/rss';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import BlogCard from '@/components/content/blog/BlogCard';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

export default function HomePage({
  featuredPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const populatedPosts = useInjectContentMeta('blog', featuredPosts);

  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo />
      <main>
        <section className={clsxm(isLoaded && 'fade-in-start')}>
          <div className='md:mt-[120px]  text-left mt-[40px]'>
            <article className=''>
              <div className='flex flex-col items-start'>
                <Accent
                  className='mb-8 md:text-4xl text-[#555] dark:text-[#bbb] text-3xl'
                  data-fade='1'
                >
                  欢迎来到 SXK 的世界
                </Accent>
                <p
                  className={clsxm(
                    'text-lg text-[#555] dark:text-[#bbb]',
                    'lg:text-xl'
                  )}
                  data-fade='1'
                >
                  人是要整活的
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    'lg:text-xl text-left text-lg'
                  )}
                  data-fade='2'
                >
                  没活了，那不就
                </p>
                <hr
                  className='mx-auto md:my-[2em] h-0 w-[50px] border-t-[1px] border-[#7d7d7d4d] my-[1em]'
                  data-fade='1'
                />
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    'lg:text-xl text-left text-lg'
                  )}
                  data-fade='1'
                >
                  死
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    'lg:text-xl text-left text-lg'
                  )}
                  data-fade='1'
                >
                  了
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    'lg:text-xl text-left text-lg'
                  )}
                  data-fade='1'
                >
                  吗
                </p>
                <hr
                  className='mx-auto md:my-[2em] h-0 w-[50px] border-t-[1px] border-[#7d7d7d4d] my-[1em]'
                  data-fade='4'
                />
                <div
                  className={clsxm(
                    'mt-2 text-[#555] dark:text-[#bbb]',
                    'lg:text-xl text-left text-lg'
                  )}
                  data-fade='4'
                >
                  优秀的网站大全在这里哦！
                  <div className='lg:my-4 my-2 gap-4 flex flex-wrap items-center'>
                    <CustomLink href='http://www.996dm.com/'>
                      <div className='flex items-center gap-1'>
                        <SiGithub />
                        动漫视频网站
                      </div>
                    </CustomLink>
                    <CustomLink href='https://www.klbzxw.fit/'>
                      <div className='flex items-center gap-1'>
                        <SiYoutube />
                        大型游戏网站
                      </div>
                    </CustomLink>
                    <CustomLink href='https://www.zhuayuya.com/'>
                      <div className='flex items-center gap-1'>
                        <SiBilibili />
                        摸鱼网站
                      </div>
                    </CustomLink>
                    <CustomLink href='https://wallhaven.cc/?f=s5t.com'>
                      <div className='flex items-center gap-1'>
                        <SiTwitter />
                        好看的壁纸网站
                      </div>
                    </CustomLink>
                  </div>
                </div>

                <p
                  className={clsxm(
                    ' mt-2 text-[#555] dark:text-[#bbb]',
                    'lg:text-xl text-left text-lg'
                  )}
                  data-fade='4'
                >
                  在这里，没有你找不到的，只有你想不到的。
                  座右铭：开心就好！
                </p>

                <div data-fade='5' className='mt-4 flex'>
                  <CustomLink
                    href='/blog'
                    onClick={() =>
                      trackEvent('Home: Read blogs', { type: 'navigate' })
                    }
                  >
                    下一个
                  </CustomLink>
                  <CustomLink
                    href='/projects'
                    className='ml-6'
                    onClick={() =>
                      trackEvent('Home: See more project', { type: 'navigate' })
                    }
                  >
                    下下一个
                  </CustomLink>
                </div>
              </div>
            </article>
          </div>
        </section>
        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='blog'>
                  <Accent>简单介绍</Accent>
                </h2>
                <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                  {populatedPosts.map((post, i) => (
                    <BlogCard
                      key={post.slug}
                      post={post}
                      className={clsx(i > 2 && 'hidden sm:block')}
                    />
                  ))}
                </ul>
                <ButtonLink
                  className='mt-4'
                  href='/blog'
                  onClick={() =>
                    trackEvent('Home: See more post', { type: 'navigate' })
                  }
                >
                  要开心哦
                </ButtonLink>
              </article>
            </section>
          )}
        </InView>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  generateRss();
  const blogs = await getAllFilesFrontmatter('blog');

  const featuredPosts = getFeatured(blogs, [
    '15-job-summary',
    '05-hundsun',
    'autumn-tips-list',
  ]);

  return {
    props: { featuredPosts },
  };
}
