import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import Layout from '../components/layout/Layout'
import { PROPERTYLISTINGSAMPLE } from '@/constants/index'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Airbnb clone listing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-gray-50">
          <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to ALX Listing App
          </h1>
          <p className="text-xl text-gray-600">
            Your Airbnb clone listing page
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            title="Sample Property"
            description="A beautiful sample property to get started"
            image="/assets/placeholder-image.svg"
            price="$100"
          />
          <Card 
            title="Another Property"
            description="Another beautiful sample property"
            image="/assets/placeholder-image.svg"
            price="$150"
          />
          <Card 
            title="Third Property"
            description="Yet another beautiful sample property"
            image="/assets/placeholder-image.svg"
            price="$200"
          />
        </div>

        <div className="text-center mt-8 space-y-4">
          <Button 
            text="View More Properties"
            onClick={() => console.log('View more clicked')}
          />
          
          {/* Test link to property detail page */}
          <div className="mt-6">
            <Link 
              href={`/property/${encodeURIComponent(PROPERTYLISTINGSAMPLE[0].name)}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              View Sample Property Detail
            </Link>
          </div>
        </div>
          </main>
        </div>
      </Layout>
    </>
  )
}

export default Home

