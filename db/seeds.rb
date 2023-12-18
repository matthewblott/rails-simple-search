100.times do
  Inbox.create(
    :name => Faker::Name.first_name.downcase
  )

end
