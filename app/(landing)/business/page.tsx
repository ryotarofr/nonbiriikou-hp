import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function BusinessPage() {
  return (
    <div className="w-full mx-auto py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Business Solutions for Every Need</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We provide a wide range of business solutions tailored to your needs. Let us help you achieve your
              business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Productivity</CardTitle>
              </CardHeader>
              <CardContent>
                Boost your team's productivity with our suite of tools designed to streamline workflow.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
              </CardHeader>
              <CardContent>Protect your business data with our top-of-the-line security measures.</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                Our solutions grow with your business. Never worry about outgrowing your software.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
