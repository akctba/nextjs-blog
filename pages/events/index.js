import Layout from '../../components/layout'
import Head from 'next/head'
import EventCard from '../../components/eventcard'


export default function Events() {
    return (
      <Layout>
        <Head>
          <title>Potluck - my events</title>
        </Head>

        <EventCard eventData={{title:'evento A'}} />
        <br/>
        <EventCard eventData={{title:'evento B'}} />
        <br/>
      </Layout>
    )
  }