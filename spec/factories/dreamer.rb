FactoryGirl.define do
  factory :dreamer do
    username { Faker::Name.name }
    email { Faker::Internet.email }
    about { Faker::Lorem.paragraph }
    recipe { Faker::Lorem.paragraph }
    zipcode { Faker::Address.zip }
    password "foobar"
  end
end