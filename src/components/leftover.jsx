<Container sx={{ py: 8 }} maxWidth="md">
  {/* End hero unit */}
  <Grid container spacing={4}>
    {cards.map((card) => (
      <Grid item key={card} xs={12} sm={4} md={4}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              // 16:9
              pt: "56.25%",
            }}
            image="https://source.unsplash.com/random"
            alt="random"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              Heading
            </Typography>

            <Typography>
              This is a media card. You can use this section to describe the
              content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
            <Button size="small">Research</Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
</Container>;

{
  /* <Grid item xs={12} sm={4} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>

                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Research</Button>
                </CardActions>
              </Card>
            </Grid> */
}

{
  /* <Container sx={{ py: 5 }} maxWidth="lg">
          <Grid container spacing={4}>
            <Card1
              style={{ height: "    445px" }}
              heading={"Derma Manufacturer"}
              body={
                " The form -derma is specifically used to name skin disorders and is used in many medical terms, especially in pathology. It ultimately comes from the Greek dérma, meaning “skin.The form -derma is specifically used to name skin disorders and is used in many medical terms, especially in pathology. "
              }
              image={Derma}
            />
            <Card1
              style={{ height: "    445px" }}
              heading={"Injection Manufacturer "}
              body={
                "Injection Molding: Injection Molding is a manufacturing process for producing parts in large volume. It is most typically used in mass-production processes where the same part is being created thousands or even millions of times in succession.a"
              }
              image={Injection}
            />
            <Card1
              style={{ height: "    445px" }}
              heading={"Pharma Manufacturer"}
              body={
                "Pharmaceutical manufacturer means any Person that develops, produces, manufactures, creates, licenses or distributes any drug, medicine or other substance used in the treatment, cure, prevention or diagnosis of any illness, disease, disorder or other condition."
              }
              image={Pharma}
            />
            <Card1
              style={{ height: "    445px" }}
              heading={"Contract Pharma Manufacturing"}
              body={
                "Pharmaceutical contract manufacturing process involves Pharmaceutical machinery, drug manufacturers contracting a firm for finished products or components. It can be seen as a type of outsourcing.  "
              }
              image={Contract}
            />
            <Card1
              style={{ height: "    445px" }}
              heading={"Hand Wash Manufacturers"}
              body={
                "It is preferably used to wash clothes and kitchen utensils, but it is also widely used to wash hands and the body. Would you like to learn how to make liquid soap at home? "
              }
              image={HandWash}
            />
            <Card1
              style={{ height: "    445px" }}
              heading={"Hand Sanitizer Manufacturer "}
              body={
                "Hand sanitizer (also known as hand antiseptic, hand disinfectant, hand rub, or handrub) is a liquid, gel or foam generally used to kill many viruses/bacteria on the hands. In most settings, hand washing with soap and water is generally preferred"
              }
              image={HandSanitizer}
            />
          </Grid>
        </Container> */
}
