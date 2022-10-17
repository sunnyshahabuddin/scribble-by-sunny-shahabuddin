# frozen_string_literal: true

FactoryBot.define do
  factory :website do
    name { Faker::Name.name }
    password { "welcome123" }
  end
end
